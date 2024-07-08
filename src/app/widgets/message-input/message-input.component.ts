import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarCircleComponent } from '../avatar-circle/avatar-circle.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [AvatarCircleComponent, NgIf, FormsModule, SvgIconComponent],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
})
export class MessageInputComponent {}
