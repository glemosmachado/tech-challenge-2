function checkTeacher(req, res, next) {
  const userType = req.header('x-user-type');

  if (userType !== 'teacher') {
    return res.status(403).json({ error: 'Access denied. Only teachers can perform this action.' });
  }

  next();
}

module.exports = checkTeacher;