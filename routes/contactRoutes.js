const express = require('express');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');
const router = express.Router();



// @route     GET api/contacts
// @desc      Get all user contatcs
// @access    Private
router.get('/', (req, res) => {
    res.send('Get all user contatcs')
})

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => {
    res.send('Add contatc')
})

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res) => {
    res.send('Update contatc')
})

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res) => {
    res.send('Delete contatc')
})

module.exports = router;