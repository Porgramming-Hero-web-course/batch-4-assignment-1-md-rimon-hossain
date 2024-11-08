{
  /// Problem-6 -->
    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
    
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updatesPartial: Partial<Profile>): Profile {
        return { ...profile, ...updatesPartial };
    }

    const myProfile: Profile = {
        name: "Rimon Hossain",
        age: 20,
        email: "yHbG8@example.com",
    };

    const updatedProfile = updateProfile(myProfile, {
        age: 21,
        email: "o0t4z@example.com", 
    });

    console.log(updatedProfile);

}