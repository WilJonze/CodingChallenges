
// A public variable can be accessed by any code that has access to the object.
// A private variable can only be accessed by the class that defines it.

class Contact {
        constructor(name, phone, extension) {
            this.name = name; //this is public, because it is referring to the
                              //instance of the class, and is able to be referenced outside
                              //of the class. 


            let phoneNumber = phone //this is private, because it is using the let keyword
                                    // and becomes locally scoped and only accessible to the
                                    // within the function of the constructor. 

            var ext = extension
    }
    

        getName(name) {
            return this.name; 
    }

        getPhone(phone) {
            return phoneNumber;
    }

        getExtension(extension) {
            return ext
        }

    
}

const myContact = new Contact("John Smith", 555-1234, 404);

console.log(myContact.getName()); //This will log out the name property
console.log(myContact.getExtension());
console.log(myContact.getPhone()); //This will return undefined
