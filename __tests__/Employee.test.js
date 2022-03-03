const Employee = require('../lib/Employee');

test('gets employee name', () => {
    const name = 'Steve'
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
})

test('gets employee id', () => {
    const name = 'Steve';
    const id = 23;
    const employee = new Employee(name, id);

    expect(employee.getId()).toBe(id);
});

test('gets employee email', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.getEmail()).toBe(email);
});

test('gets employee role', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe('Employee');
});

test('can create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('can set a name from the constructor', () => {
    const name = 'Steve'
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
});

test('can set an id from the constructor', () => {
    const name = 'Steve';
    const id = 23;
    const employee = new Employee(name, id);

    expect(employee.id).toBe(id);
});

test('can set an email from the constructor', () => {
    const name = 'Steve';
    const id = 23;
    const email = 'alexandra.lin.holden@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.email).toBe(email);
});