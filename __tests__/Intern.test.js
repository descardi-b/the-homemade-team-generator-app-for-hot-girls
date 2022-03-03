const Intern = require('../lib/Intern');

test('gets intern school', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const school = 'NYU';
    const intern = new Intern(name, id, email, school);

    expect(intern.getSchool()).toBe(school);
});

test('gets intern role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});

test('can set a school from the constructor', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const school = 'NYU';

    const intern = new Intern(name, id, email, school);
    expect(intern.school).toBe(school);
});