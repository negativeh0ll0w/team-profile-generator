const Manager = require('../lib/Manager');

Describe('Manager', () => {

    // Employee role
    describe('getRole', () => {
        it('should return Manager', () => { 
            const manager = new Manager('Jerma', 1, 'jerma@email.com');
            expect(manager.getRole()).toEqual("Manager");
        });
    });

    // Manager office
    describe('getOffice', () => {
        it('should return the managers office number', () => { 
            const manager = new Manager('Manage Man', 1, 'manager@email.com', 4);  
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

});
