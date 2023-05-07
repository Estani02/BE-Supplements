import app from './src/app'
const PORT = process.env.PORT ?? 3000 // "??" Manejar valores nulos o indefinidos de manera más sencilla y concisa.

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
} catch (error) {

}
