const Intern = require('../lib/Intern');

Describe('Intern', () => {

    // Employee role
    describe('getRole', () => {
        it('should return Intern', () => { 
            const intern = new Intern('Name', 1, 'name@gmail', '2University');
            expect(intern.getRole()).toEqual("Intern");
        });
    });

    // Intern school
    describe('getSchool', () => {
        it('should return the school the intern goes to', () => { 
            const intern = new Intern('Name', 1, 'name@gmail', 'Some University');
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

});