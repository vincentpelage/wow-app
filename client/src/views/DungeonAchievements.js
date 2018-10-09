import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Input from "../components/input/index";
import Select from "react-select";

const WrapperForm = styled.div`
  z-index: 3;
  margin-top: 16px;
`;

const options = [
  { value: "aegwynn", label: "Aegwynn" },
  { value: "aerie peak", label: "Aerie Peak" },
  { value: "agamaggan", label: "Agamaggan" },
  { value: "aggra (português)", label: "Aggra (Português)" },
  { value: "aggramar", label: "Aggramar" },
  { value: "ahn'qiraj", label: "Ahn'Qiraj" },
  { value: "al'akir", label: "Al'Akir" },
  { value: "alexstrasza", label: "Alexstrasza" },
  { value: "alleria", label: "Alleria" },
  { value: "alonsus", label: "Alonsus" },
  { value: "aman'thul", label: "Aman'Thul" },
  { value: "ambossar", label: "Ambossar" },
  { value: "anachronos", label: "Anachronos" },
  { value: "anetheron", label: "Anetheron" },
  { value: "antonidas", label: "Antonidas" },
  { value: "anub'arak", label: "Anub'arak" },
  { value: "arak-arahm", label: "Arak-arahm" },
  { value: "arathi", label: "Arathi" },
  { value: "arathor", label: "Arathor" },
  { value: "archimonde", label: "Archimonde" },
  { value: "area 52", label: "Area 52" },
  { value: "argent dawn", label: "Argent Dawn" },
  { value: "arthas", label: "Arthas" },
  { value: "arygos", label: "Arygos" },
  { value: "ashenvale", label: "Ashenvale" },
  { value: "aszune", label: "Aszune" },
  { value: "auchindoun", label: "Auchindoun" },
  { value: "azjol-nerub", label: "Azjol-Nerub" },
  { value: "azshara", label: "Azshara" },
  { value: "azuregos", label: "Azuregos" },
  { value: "azuremyst", label: "Azuremyst" },
  { value: "baelgun", label: "Baelgun" },
  { value: "balnazzar", label: "Balnazzar" },
  { value: "blackhand", label: "Blackhand" },
  { value: "blackmoore", label: "Blackmoore" },
  { value: "blackrock", label: "Blackrock" },
  { value: "blackscar", label: "Blackscar" },
  { value: "blade's edge", label: "Blade's Edge" },
  { value: "bladefist", label: "Bladefist" },
  { value: "bloodfeather", label: "Bloodfeather" },
  { value: "bloodhoof", label: "Bloodhoof" },
  { value: "bloodscalp", label: "Bloodscalp" },
  { value: "blutkessel", label: "Blutkessel" },
  { value: "booty bay", label: "Booty Bay" },
  { value: "borean tundra", label: "Borean Tundra" },
  { value: "boulderfist", label: "Boulderfist" },
  { value: "bronze dragonflight", label: "Bronze Dragonflight" },
  { value: "bronzebeard", label: "Bronzebeard" },
  { value: "burning blade", label: "Burning Blade" },
  { value: "burning legion", label: "Burning Legion" },
  { value: "burning steppes", label: "Burning Steppes" },
  { value: "c'thun", label: "C'Thun" },
  { value: "chamber of aspects", label: "Chamber of Aspects" },
  { value: "chants éternels", label: "Chants éternels" },
  { value: "cho’gall", label: "Cho’gall" },
  { value: "chromaggus", label: "Chromaggus" },
  { value: "colinas pardas", label: "Colinas Pardas" },
  { value: "confrérie du thorium", label: "Confrérie du Thorium" },
  { value: "conseil des ombres", label: "Conseil des Ombres" },
  { value: "crushridge", label: "Crushridge" },
  { value: "culte de la rive noire", label: "Culte de la Rive noire" },
  { value: "daggerspine", label: "Daggerspine" },
  { value: "dalaran", label: "Dalaran" },
  { value: "dalvengyr", label: "Dalvengyr" },
  { value: "darkmoon faire", label: "Darkmoon Faire" },
  { value: "darksorrow", label: "Darksorrow" },
  { value: "darkspear", label: "Darkspear" },
  { value: "das konsortium", label: "Das Konsortium" },
  { value: "das syndikat", label: "Das Syndikat" },
  { value: "deathguard", label: "Deathguard" },
  { value: "deathweaver", label: "Deathweaver" },
  { value: "deathwing", label: "Deathwing" },
  { value: "deephome", label: "Deephome" },
  { value: "defias brotherhood", label: "Defias Brotherhood" },
  { value: "dentarg", label: "Dentarg" },
  { value: "der mithrilorden", label: "Der Mithrilorden" },
  { value: "der rat von dalaran", label: "Der Rat von Dalaran" },
  { value: "der abyssische rat", label: "Der abyssische Rat" },
  { value: "destromath", label: "Destromath" },
  { value: "dethecus", label: "Dethecus" },
  { value: "die aldor", label: "Die Aldor" },
  { value: "die nachtwache", label: "Die Nachtwache" },
  { value: "die silberne hand", label: "Die Silberne Hand" },
  { value: "die todeskrallen", label: "Die Todeskrallen" },
  { value: "die ewige wacht", label: "Die ewige Wacht" },
  { value: "doomhammer", label: "Doomhammer" },
  { value: "draenor", label: "Draenor" },
  { value: "dragonblight", label: "Dragonblight" },
  { value: "dragonmaw", label: "Dragonmaw" },
  { value: "drak'thul", label: "Drak'thul" },
  { value: "drek'thar", label: "Drek'Thar" },
  { value: "dun modr", label: "Dun Modr" },
  { value: "dun morogh", label: "Dun Morogh" },
  { value: "dunemaul", label: "Dunemaul" },
  { value: "durotan", label: "Durotan" },
  { value: "earthen ring", label: "Earthen Ring" },
  { value: "echsenkessel", label: "Echsenkessel" },
  { value: "eitrigg", label: "Eitrigg" },
  { value: "eldre'thalas", label: "Eldre'Thalas" },
  { value: "elune", label: "Elune" },
  { value: "emerald dream", label: "Emerald Dream" },
  { value: "emeriss", label: "Emeriss" },
  { value: "eonar", label: "Eonar" },
  { value: "eredar", label: "Eredar" },
  { value: "eversong", label: "Eversong" },
  { value: "executus", label: "Executus" },
  { value: "exodar", label: "Exodar" },
  { value: "festung der stürme", label: "Festung der Stürme" },
  { value: "fordragon", label: "Fordragon" },
  { value: "forscherliga", label: "Forscherliga" },
  { value: "frostmane", label: "Frostmane" },
  { value: "frostmourne", label: "Frostmourne" },
  { value: "frostwhisper", label: "Frostwhisper" },
  { value: "frostwolf", label: "Frostwolf" },
  { value: "galakrond", label: "Galakrond" },
  { value: "garona", label: "Garona" },
  { value: "garrosh", label: "Garrosh" },
  { value: "genjuros", label: "Genjuros" },
  { value: "ghostlands", label: "Ghostlands" },
  { value: "gilneas", label: "Gilneas" },
  { value: "goldrinn", label: "Goldrinn" },
  { value: "gordunni", label: "Gordunni" },
  { value: "gorgonnash", label: "Gorgonnash" },
  { value: "greymane", label: "Greymane" },
  { value: "grim batol", label: "Grim Batol" },
  { value: "grom", label: "Grom" },
  { value: "gul’dan", label: "Gul’dan" },
  { value: "hakkar", label: "Hakkar" },
  { value: "haomarush", label: "Haomarush" },
  { value: "hellfire", label: "Hellfire" },
  { value: "hellscream", label: "Hellscream" },
  { value: "howling fjord", label: "Howling Fjord" },
  { value: "hyjal", label: "Hyjal" },
  { value: "illidan", label: "Illidan" },
  { value: "jaedenar", label: "Jaedenar" },
  { value: "kael'thas", label: "Kael'thas" },
  { value: "karazhan", label: "Karazhan" },
  { value: "kargath", label: "Kargath" },
  { value: "kazzak", label: "Kazzak" },
  { value: "kel'thuzad", label: "Kel'Thuzad" },
  { value: "khadgar", label: "Khadgar" },
  { value: "khaz modan", label: "Khaz Modan" },
  { value: "khaz'goroth", label: "Khaz'goroth" },
  { value: "kil'jaeden", label: "Kil'jaeden" },
  { value: "kilrogg", label: "Kilrogg" },
  { value: "kirin tor", label: "Kirin Tor" },
  { value: "kor'gall", label: "Kor'gall" },
  { value: "krag'jin", label: "Krag'jin" },
  { value: "krasus", label: "Krasus" },
  { value: "kul tiras", label: "Kul Tiras" },
  { value: "kult der verdammten", label: "Kult der Verdammten" },
  { value: "la croisade écarlate", label: "La Croisade écarlate" },
  { value: "la veille d'argus", label: "La Veille d'Argus" },
  { value: "laughing skull", label: "Laughing Skull" },
  { value: "les clairvoyants", label: "Les Clairvoyants" },
  { value: "les sentinelles", label: "Les Sentinelles" },
  { value: "lich king", label: "Lich King" },
  { value: "lightbringer", label: "Lightbringer" },
  { value: "lightning's blade", label: "Lightning's Blade" },
  { value: "lordaeron", label: "Lordaeron" },
  { value: "los errantes", label: "Los Errantes" },
  { value: "lothar", label: "Lothar" },
  { value: "légion du bouclier balafré", label: "Légion du Bouclier balafré" },
  { value: "madmortem", label: "Madmortem" },
  { value: "magtheridon", label: "Magtheridon" },
  { value: "mal'ganis", label: "Mal'Ganis" },
  { value: "malfurion", label: "Malfurion" },
  { value: "malorne", label: "Malorne" },
  { value: "malygos", label: "Malygos" },
  { value: "mannoroth", label: "Mannoroth" },
  { value: "marécage de zangar", label: "Marécage de Zangar" },
  { value: "mazrigos", label: "Mazrigos" },
  { value: "medivh", label: "Medivh" },
  { value: "minahonda", label: "Minahonda" },
  { value: "moonglade", label: "Moonglade" },
  { value: "mug'thol", label: "Mug'thol" },
  { value: "nagrand", label: "Nagrand" },
  { value: "nathrezim", label: "Nathrezim" },
  { value: "naxxramas", label: "Naxxramas" },
  { value: "nazjatar", label: "Nazjatar" },
  { value: "nefarian", label: "Nefarian" },
  { value: "nemesis", label: "Nemesis" },
  { value: "neptulon", label: "Neptulon" },
  { value: "nera'thor", label: "Nera'thor" },
  { value: "ner’zhul", label: "Ner’zhul" },
  { value: "nethersturm", label: "Nethersturm" },
  { value: "nordrassil", label: "Nordrassil" },
  { value: "norgannon", label: "Norgannon" },
  { value: "nozdormu", label: "Nozdormu" },
  { value: "onyxia", label: "Onyxia" },
  { value: "outland", label: "Outland" },
  { value: "perenolde", label: "Perenolde" },
  { value: "pozzo dell'eternità", label: "Pozzo dell'Eternità" },
  { value: "proudmoore", label: "Proudmoore" },
  { value: "quel'thalas", label: "Quel'Thalas" },
  { value: "ragnaros", label: "Ragnaros" },
  { value: "rajaxx", label: "Rajaxx" },
  { value: "rashgarroth", label: "Rashgarroth" },
  { value: "ravencrest", label: "Ravencrest" },
  { value: "ravenholdt", label: "Ravenholdt" },
  { value: "razuvious", label: "Razuvious" },
  { value: "rexxar", label: "Rexxar" },
  { value: "runetotem", label: "Runetotem" },
  { value: "sanguino", label: "Sanguino" },
  { value: "sargeras", label: "Sargeras" },
  { value: "saurfang", label: "Saurfang" },
  { value: "sen'jin", label: "Sen'jin" },
  { value: "shadowsong", label: "Shadowsong" },
  { value: "shattered halls", label: "Shattered Halls" },
  { value: "shattered hand", label: "Shattered Hand" },
  { value: "shattrath", label: "Shattrath" },
  { value: "shen'dralar", label: "Shen'dralar" },
  { value: "silvermoon", label: "Silvermoon" },
  { value: "sinstralis", label: "Sinstralis" },
  { value: "skullcrusher", label: "Skullcrusher" },
  { value: "soulflayer", label: "Soulflayer" },
  { value: "spinebreaker", label: "Spinebreaker" },
  { value: "sporeggar", label: "Sporeggar" },
  { value: "steamwheedle cartel", label: "Steamwheedle Cartel" },
  { value: "stormrage", label: "Stormrage" },
  { value: "stormreaver", label: "Stormreaver" },
  { value: "stormscale", label: "Stormscale" },
  { value: "sunstrider", label: "Sunstrider" },
  { value: "suramar", label: "Suramar" },
  { value: "sylvanas", label: "Sylvanas" },
  { value: "taerar", label: "Taerar" },
  { value: "talnivarr", label: "Talnivarr" },
  { value: "tarren mill", label: "Tarren Mill" },
  { value: "teldrassil", label: "Teldrassil" },
  { value: "temple noir", label: "Temple noir" },
  { value: "terenas", label: "Terenas" },
  { value: "terokkar", label: "Terokkar" },
  { value: "terrordar", label: "Terrordar" },
  { value: "the maelstrom", label: "The Maelstrom" },
  { value: "the sha'tar", label: "The Sha'tar" },
  { value: "the venture co", label: "The Venture Co" },
  { value: "theradras", label: "Theradras" },
  { value: "thermaplugg", label: "Thermaplugg" },
  { value: "thrall", label: "Thrall" },
  { value: "throk'feroth", label: "Throk'Feroth" },
  { value: "thunderhorn", label: "Thunderhorn" },
  { value: "tichondrius", label: "Tichondrius" },
  { value: "tirion", label: "Tirion" },
  { value: "todeswache", label: "Todeswache" },
  { value: "trollbane", label: "Trollbane" },
  { value: "turalyon", label: "Turalyon" },
  { value: "twilight's hammer", label: "Twilight's Hammer" },
  { value: "twisting nether", label: "Twisting Nether" },
  { value: "tyrande", label: "Tyrande" },
  { value: "uldaman", label: "Uldaman" },
  { value: "ulduar", label: "Ulduar" },
  { value: "uldum", label: "Uldum" },
  { value: "un'goro", label: "Un'Goro" },
  { value: "varimathras", label: "Varimathras" },
  { value: "vashj", label: "Vashj" },
  { value: "vek'lor", label: "Vek'lor" },
  { value: "vek'nilash", label: "Vek'nilash" },
  { value: "vol'jin", label: "Vol'jin" },
  { value: "wildhammer", label: "Wildhammer" },
  { value: "wrathbringer", label: "Wrathbringer" },
  { value: "xavius", label: "Xavius" },
  { value: "ysera", label: "Ysera" },
  { value: "ysondre", label: "Ysondre" },
  { value: "zenedar", label: "Zenedar" },
  { value: "zirkel des cenarius", label: "Zirkel des Cenarius" },
  { value: "zul'jin", label: "Zul'jin" },
  { value: "zuluhed", label: "Zuluhed" }
];

class DungeonAchievements extends React.Component {
  state = {
    pseudo: "",
    selectedOption: "",
    emptyInputAlert: ""
  };

  handleInputChange = event => {
    const pseudo = event.target.value.trim();
    this.setState({ pseudo });
  };

  handleSelectChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value });
  };

  handleSubmit = () => {
    const { pseudo, selectedOption } = this.state;

    if (pseudo.length > 0 && selectedOption.length > 0) {
      this.props.actions.dungeonAchievementsAction(pseudo, selectedOption);
      this.setState({ emptyInputAlert: "" });
    } else {
      this.handleEmptyInput();
    }
  };

  handleEmptyInput = () => {
    const { pseudo, selectedOption } = this.state;
    if (pseudo.length === 0 && selectedOption.length > 0) {
      this.setState({
        emptyInputAlert: "Veuillez renseigner votre pseudo :-)"
      });
    } else if (selectedOption.length === 0 && pseudo.length > 0) {
      this.setState({
        emptyInputAlert: "Veuillez renseigner votre royaume :-)"
      });
    } else {
      this.setState({
        emptyInputAlert: "Veuillez renseigner votre pseudo et votre royaume :-)"
      });
    }
  };

  render() {
    const { toggleTheme } = this.props;
    const { selectedOption, pseudo } = this.state;
    const customSelectStyle = {
      placeholder: () => ({
        fontFamily: "Roboto",
        fontWeight: "300"
      }),
      menuList: () => ({
        fontFamily: "Roboto",
        fontWeight: "300"
      })
    };
    console.log(this.state.emptyInputAlert);

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner title="hauts-faits en donjons">
          <WrapperForm>
            <Input
              placeholder="Pseudo"
              type="text"
              onChange={this.handleInputChange}
              value={pseudo}
            />
            <Select
              value={selectedOption}
              onChange={this.handleSelectChange}
              options={options}
              placeholder="Royaume"
              styles={customSelectStyle}
              isSearchable={false}
            />
            <button onClick={this.handleSubmit}>submit</button>
            {this.props.dungeonAchievementsReducer.data &&
              Object.keys(this.props.dungeonAchievementsReducer.data).length >
                0 && (
                <pre>
                  {this.props.dungeonAchievementsReducer.data.map((obj, id) => (
                    <li key={id}>{obj.name}</li>
                  ))}
                </pre>
              )}
          </WrapperForm>
        </Banner>
      </React.Fragment>
    );
  }
}

export default DungeonAchievements;
