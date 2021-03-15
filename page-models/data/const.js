const dotenv = require('dotenv')
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        STANDAR_USERNAME: process.env.STANDAR_USERNAME,
        LOCKED_OUT_USER:process.env.LOCKED_OUT_USER,
        PROBLEM_USER:process.env.PROBLEM_USER,
        PERFORMANCE_GLITCH_USER:process.env.PERFORMANCE_GLITCH_USER,
        PASSWORD: process.env.PASSWORD
    },

    INVALID_USER:{
        USER_NAME:'invalid_username',
        PASSWORD:'invalid_password'
    }
}

export const URLS = {
    LOGIN_URL:'https://www.saucedemo.com/',
    PRODUCTS_PAGE_URL:'https://www.saucedemo.com/inventory.html'
}

export const MESSAGES = {
    FAILED: {
        USER_NAME_REQUIRED:'Epic sadface: Username is required',
        PASSWORD_REQUIRED:'Epic sadface: Password is required',
        INVALID_CREDENTIALS:'Epic sadface: Username and password do not match any user in this service',
        FIRST_NAME_REQUIRED:'Error: First Name is required',
        LAST_NAME_REQUIRED:'Error: Last Name is required',
        POSTAL_CODE_REQUIRED:'Error: Postal Code is required'
    }
}

export const PAGETITLES = {
    SHOPPINGCART: 'Your Cart',
    OVERVIEW:'Checkout: Overview',
    COMPLETE_ORDER_PAGE:'Finish'
}

export const USERSINFO = {
    FIRST_NAME: 'Test User',
    LAST_NAME: 'Automation',
    POSTAL_CODE: '12345'
}