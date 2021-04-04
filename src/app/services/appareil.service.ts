export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'machine à laver',
      status: 'allumer'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumer'
    },
    {
      id: 3,
      name: 'Fer à repasser',
      status: 'eteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  AllumerTout() {
    for (let appareil of this.appareils){
      appareil.status = 'allumer';
    }
  }

  EteindreTout() {
    for (let appareil of this.appareils){
      appareil.status = 'eteint';
    }
  }

  AllumerUn(index: number) {
    this.appareils[index].status = 'allumer';
  }

  EteindreUn(index: number) {
    this.appareils[index].status = 'eteint';
  }
}
