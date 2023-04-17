// MiddleWares !


// Custom Error Handling Middleware
app.use(ErrorHandler);

// Custom 404 Page Not Found Middleware
app.use(Notfound);

// Middleware for parsing and sending the JSON Data
app.use(express.json());

// Middleware for common route path
app.use("/api/v1/products", Router);
