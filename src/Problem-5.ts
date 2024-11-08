{
  // Problem-5 -->
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    
    type RichPerson = {
        name: string;
        age: number;
        hasPhone: boolean;
        phoneModel: string;
        occupation: string;
    }

    function getProperty<T, K extends keyof T>(obj: T, key:K):T[K] {
        return obj[key];
    }

    const richPerson: RichPerson = {
      name: "md. Rich User",
      age: 19,
      hasPhone: true,
      phoneModel: "Iphone 16 Pro max",
      occupation: "Software Engineer",
    };
   console.log(getProperty(richPerson, "name"));


}