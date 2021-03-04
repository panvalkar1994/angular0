import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  botId: number = 1;
  botStatus: string = "online";

  getBotStatus() {
    return this.botStatus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
