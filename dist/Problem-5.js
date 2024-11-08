"use strict";
{
    const richUser = {
        name: "md. Rich User",
        age: 19,
        hasPhone: true,
        phoneModel: "Iphone 16 Pro max",
        occupation: "Software Engineer"
    };
    function getProperty(obj, key) {
        return obj[key];
    }
    const value = getProperty(richUser, "phoneModel");
    console.log(value);
}
