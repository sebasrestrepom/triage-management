class Patient {
  constructor(id, identification, name, lastname, priority, entryTime) {
    this.id = id;
    this.identification = identification;
    this.name = name;
    this.lastname = lastname;
    this.priority = priority;
    this.entryTime;
  }
}

module.exports = Patient;
