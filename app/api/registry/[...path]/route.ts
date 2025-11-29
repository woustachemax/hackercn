import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params;
    const requestedPath = resolvedParams.path.join('/');
    
    if (requestedPath === 'index.json' || requestedPath === '') {
      const indexPath = path.join(process.cwd(), 'registry', 'index.json');
      const fileContents = fs.readFileSync(indexPath, 'utf8');
      return NextResponse.json(JSON.parse(fileContents));
    }
    
    const filePath = path.join(process.cwd(), 'registry', requestedPath);
    const jsonPath = filePath.endsWith('.json') ? filePath : `${filePath}.json`;
    
    if (!fs.existsSync(jsonPath)) {
      return NextResponse.json(
        { error: 'not found' },
        { status: 404 }
      );
    }
    
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    return NextResponse.json(
      { error: 'failed' },
      { status: 500 }
    );
  }
}