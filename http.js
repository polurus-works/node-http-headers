const allowedOrigins = [
    'http://localhost:8080',
    'http://localhost:8000',
    'http://localhost:3000',
    'http://127.0.0.1:8000',
];

class HttpHeader {
    static setDefaultHeaders(req, res, next) {
        const origin = req.headers.origin;

        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        } else {
            res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
        }

        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Max-Age', '3600');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // Proceed to the next middleware
        next();
    }

    static metodosNaoPermitidos(req, res) {
        res.status(405).json({ error: 'Método não permitido.' });
    }
}

module.exports = HttpHeader;