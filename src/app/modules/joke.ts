export class Joke {
  
  constructor(Joke: string,JokeTitle:string){
    this.Joke = Joke;
    this.JokeTitle = JokeTitle;
    this.hide = true;
  }

  Joke: string;
  JokeTitle: string;
  hide : boolean;

  toggle() {
    this.hide = !this.hide;
  }
}

