import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InfoPipe } from './pipes/info.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonBattleComponent,
    InfoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [provideHttpClient(), PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }