// List of functions
//
// set_cookie()
// get_cookie
// delete_all_cookies()



function set_cookie(cookie_name, cookie_value, cookie_expire, cookie_path, cookie_domain, cookie_secure) {

    // Begin the cookie parameter string
    var cookie_string = cookie_name + "=" + cookie_value

    // Add the expiration date, if it was specified
    if (cookie_expire) {
        var expire_date = new Date()
        var ms_from_now = cookie_expire * 24 * 60 * 60 * 1000
        expire_date.setTime(expire_date.getTime() + ms_from_now)
        var expire_string = expire_date.toGMTString()
        cookie_string += "; expires=" + expire_string
    }
    
    // Add the path, if it was specified
    if (cookie_path) {
        cookie_string += "; path=" + cookie_path
    }

    // Add the domain, if it was specified
    if (cookie_domain) {
        cookie_string += "; domain=" + cookie_domain
    }
    
    // Add the secure Boolean, if it's true
    if (cookie_secure) {
        cookie_string += "; true"
    }
    
    // Set the cookie
    document.cookie = cookie_string

//alert(cookie_string)
}



function get_cookie(name_to_get) {

    var cookie_pair
    var cookie_name
    var cookie_value
    
    // Split all the cookies into an array
    var cookie_array = document.cookie.split("; ")
    
    // Run through the cookies
    for (counter = 0; counter < cookie_array.length; counter++) {
    
        // Split the cookie into a name/value pair
        cookie_pair = cookie_array[counter].split("=")
        cookie_name = cookie_pair[0]
        cookie_value = cookie_pair[1]
        
        // Compare the name with the name we want
        if (cookie_name == name_to_get) {
            // If this is the one, return the value
            return unescape(cookie_value)
        }
    }
    
    // If the cookie doesn't exist, return null
    return null
}



function delete_all_cookies() {

    var cookie_pair
    var cookie_name
    
    // Split all the cookies into an array
    var cookie_array = document.cookie.split("; ")
    
    // Run through the cookies
    for (counter = 0; counter < cookie_array.length; counter++) {
    
        // Split the cookie into a name/value pair
        cookie_pair = cookie_array[counter].split("=")
        cookie_name = cookie_pair[0]
        set_cookie(cookie_name, "", -1)
    }
}
