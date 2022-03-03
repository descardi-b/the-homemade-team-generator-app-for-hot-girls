const Manager = require('../lib/Manager');

test('gets office number', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const officeNumber = 12;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('gets manager role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});

test('can set an office number from the constructor', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const officeNumber = 12;

    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});