import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // AI Agent Discovery Headers
  response.headers.set('Link',
    '</.well-known/agent-card.json>; rel="a2a-agent-card", ' +
    '</llms.txt>; rel="llms-txt", ' +
    '</.well-known/atap.json>; rel="ai-service"'
  );
  response.headers.set('X-AI-Service', 'true');
  response.headers.set('X-AI-Protocol', 'A2A, ATAP, MCP');
  response.headers.set('X-AI-Endpoint',
    'https://api.atap.ai/v1/chat?tenant=tensortunes'
  );
  response.headers.set('X-Robots-Tag',
    'a2a-agent-card: /.well-known/agent-card.json'
  );

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
