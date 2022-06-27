export const errorResponder = (err, req, res, next) => {
    res.header("Content-Type", 'application/json')
    res.status(err.statusCode).send(JSON.stringify(err, null, 4))
}

export const invalidPathHandler = (req, res, next) => {
    res.redirect('/error')
}


export const errorLogger = (err, req, res, next) => {
    console.error('\x1b[31m', err) 
    next(err) 
  }