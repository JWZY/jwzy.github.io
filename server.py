from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Get the path from the request
        path = self.path
        
        # If the path is just '/', serve index.html
        if path == '/':
            self.path = '/index.html'
            return SimpleHTTPRequestHandler.do_GET(self)
        
        # If the path doesn't end with .html, try to find the corresponding HTML file
        if not path.endswith('.html'):
            # Remove leading slash and add .html
            html_path = path[1:] + '.html'
            if os.path.exists(html_path):
                self.path = '/' + html_path
                return SimpleHTTPRequestHandler.do_GET(self)
        
        # If the file doesn't exist, serve 404.html
        if not os.path.exists(path[1:]):
            self.path = '/404.html'
            return SimpleHTTPRequestHandler.do_GET(self)
        
        # Otherwise, serve the requested file
        return SimpleHTTPRequestHandler.do_GET(self)

def run(server_class=HTTPServer, handler_class=CustomHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run() 