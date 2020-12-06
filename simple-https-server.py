from http.server import HTTPServer, SimpleHTTPRequestHandler
import http
import ssl


httpd = HTTPServer(('localhost', 4443), SimpleHTTPRequestHandler)

httpd.socket = ssl.wrap_socket (httpd.socket, keyfile="key.pem", certfile='server.pem', server_side=True)

httpd.serve_forever()
