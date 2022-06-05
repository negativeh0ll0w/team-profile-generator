const Engineer = require('../lib/Engineer');

Describe('Engineer', () => {

    // Employee role
    describe('getRole', () => {
        it('should return Engineer', () => { 
            const engineer = new Engineer('Name', 1, 'name@email.com', 'username');
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

    // Engineer Github
    describe('getGithub', () => {
        it('should return the employees github', () => { 
            const engineer = new Engineer('Employee Name', 1, 'name@email.com', 'username');
            expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
        });
    });

});
