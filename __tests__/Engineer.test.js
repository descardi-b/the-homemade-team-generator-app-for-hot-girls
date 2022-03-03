const Engineer = require('../lib/Engineer');

test('gets engineer GitHub', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const github = 'www.github.com/descardi-b';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getGithub()).toBe(github);
});

test('gets engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});

test('can set a github from the constructor', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const github = 'www.github.com/descardi-b';

    const engineer = new Engineer(name, id, email, github);
    expect(engineer.github).toBe(github);
});