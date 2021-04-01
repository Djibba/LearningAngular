export class AppareilService {
  appareils = [
    {
      name: 'machine à laver',
      status: 'allumer'
    },
    {
      name: 'Frigo',
      status: 'allumer'
    },
    {
      name: 'Fer à repasser',
      status: 'eteint'
    }
  ];

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
