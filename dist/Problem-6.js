"use strict";
{
    function updateProfile(profile, updatesPartial) {
        return Object.assign(Object.assign({}, profile), updatesPartial);
    }
    const profile = {
        name: "Rimon Hossain",
        age: 20,
        email: "yHbG8@example.com",
    };
    const updatedProfile = updateProfile(profile, {
        age: 21,
        email: "o0t4z@example.com",
    });
    console.log(updatedProfile);
}
