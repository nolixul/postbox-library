import express from "express";
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

app.get('/', (request, response, next) => {
    response.send('This is my server using the ES6 syntax')
    next(error)
})

// Error handling

app.use((error, request, response, next) => {
    if (error.status !== undefined) {
        response.status(error.status).send({ message: error.message })
    }
    response.status(400).send({ message: 'Bad request' });
    next(error)
});

app.use((error, request, response, next) => {
    response.status(500).send({ message: 'Server error' });
    next(error)
})

app.all('/*', (request, response) => {
    response.status(404).send({ message: 'Not found' });
});