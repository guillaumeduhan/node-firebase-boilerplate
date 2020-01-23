/*
 * User controller
 */

'use strict'

const admin = require('firebase-admin')
const _ = require('lodash')

exports.create = async (payload) => {
  return admin
  .auth()
  .createUser({
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    return userRecord
  })
  .catch(function(error) {
    return false
  })
