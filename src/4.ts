class Key {
  private signature = Math.floor(Math.random() * 9000) + 1000;

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public tenants: Person[] = [];

  constructor(public key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      return;
    }

    this.tenants.push(person);
  }

  openDoor(keyPerson: Key): void {}
}

class MyHouse extends House {
  openDoor(key: Key): void {
    this.door = key.getSignature() === this.key.getSignature();
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export { Key, Person, MyHouse };
