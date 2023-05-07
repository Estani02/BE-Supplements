import express from 'express'
import morgan from 'morgan'
import productRouter from './routes/product.routes'

const app = express()

app.use(morgan('dev')) // Proporciona información detallada sobre cada solicitud y respuesta HTTP que se maneja.

app.use('/supple', productRouter)

export default app
