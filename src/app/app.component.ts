import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  totalTeam: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (
      !this.numberOfTeams ||
      Number(this.numberOfTeams) > this.members.length || Number(this.numberOfTeams)<=0
    ) {
      this.errorMessage = 'Invalid team count';

      return;
    }
    console.log(this.members.length,this.numberOfTeams,Number(this.numberOfTeams) > this.members.length)
    this.errorMessage = '';
    const newMembers = [...this.members];

    while (newMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * newMembers.length);
        const member = newMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.totalTeam[i]) {
          this.totalTeam[i].push(member);
        } else {
          this.totalTeam[i] = [member];
        }
      }
    }
    this.numberOfTeams = "";
    this.members = []
  }
}
