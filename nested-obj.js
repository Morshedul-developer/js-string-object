const college = {
    name: 'vnc',
    classes: [9, 10, 11, 12],
    address: {
        street: '123 Main St',
        city: 'Metropolis',
        state: 'NY',
        zip: '10001',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
};

console.log(college.address.coordinates['lat']); // Output: 40.7128

delete college.classes;

console.log(college);