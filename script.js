class CivilizationGame {
  constructor() {
    this.playerName = '';
    this.selectedCivilization = '';
    this.gameStarted = false;

    this.civilizationTypes = {
      'cavemen': {
        name: "Cavemen Tribe",
        displayName: "Stone Age",
        description: "Your primitive cave-dwelling tribe has mastered fire and basic stone tools. Strong defensive position in caves.",
        bonus: "+25% population growth, +20% defensive bonus",
        startIndex: 0,
        bonusMultiplier: 1.25
      },
      'nomads': {
        name: "Nomadic Hunters", 
        displayName: "Stone Age",
        description: "Your tribe follows mammoth herds across frozen wastelands. Master hunters with superior mobility.",
        bonus: "+30% hunting rewards, +15% movement speed",
        startIndex: 0,
        bonusMultiplier: 1.3
      },
      'settlers': {
        name: "Early Settlers",
        displayName: "Stone Age", 
        description: "Your tribe has learned basic agriculture and animal domestication. More advanced than other stone age peoples.",
        bonus: "+35% gold income, +10% faster advancement",
        startIndex: 0,
        bonusMultiplier: 1.35
      },
      'bronze-egypt': {
        name: "Egyptian Kingdom",
        displayName: "Bronze Age",
        description: "Masters of the Nile with advanced bronze working and monumental architecture.",
        bonus: "+40% gold income, +25% construction speed",
        startIndex: 1,
        bonusMultiplier: 1.4
      },
      'bronze-assyrian': {
        name: "Assyrian Empire",
        displayName: "Bronze Age", 
        description: "Fierce warriors with iron discipline and superior bronze weapons technology.",
        bonus: "+35% military strength, +20% conquest rewards",
        startIndex: 1,
        bonusMultiplier: 1.35
      },
      'bronze-babylonian': {
        name: "Babylonian City-State",
        displayName: "Bronze Age",
        description: "Advanced scholars and traders with written laws and mathematical knowledge.",
        bonus: "+30% research speed, +25% trade efficiency", 
        startIndex: 1,
        bonusMultiplier: 1.3
      }
    };

    this.civilizations = [
      {
        name: "Stone Age Tribe",
        displayName: "Stone Age",
        description: "Your primitive tribe struggles to survive in a harsh world. Hunt mammoth and gather resources to grow stronger.",
        bonus: "+25% hunting efficiency",
        troops: [
          { name: "Hunter", cost: 20, attack: 3, defense: 2, description: "Skilled tracker with spear" },
          { name: "Gatherer", cost: 15, attack: 1, defense: 3, description: "Collects food and materials" },
          { name: "Warrior", cost: 35, attack: 5, defense: 4, description: "Fierce fighter with stone axe" }
        ],
        scrollCost: 500,
        nextCiv: "Bronze Age"
      },
      {
        name: "Bronze Age Kingdom",
        displayName: "Bronze Age", 
        description: "Metal working has revolutionized your society. Bronze weapons give you an edge over primitive tribes.",
        bonus: "+30% weapon effectiveness",
        troops: [
          { name: "Bronze Spearman", cost: 40, attack: 6, defense: 5, description: "Elite soldier with bronze spear" },
          { name: "Archer", cost: 35, attack: 4, defense: 3, description: "Ranged fighter with composite bow" },
          { name: "Bronze Chariot", cost: 80, attack: 8, defense: 6, description: "Fast mobile warfare unit" }
        ],
        egyptianTroops: [
          { name: "Pharaoh's Guard", cost: 60, attack: 7, defense: 8, description: "Elite royal bodyguard with ceremonial weapons" },
          { name: "Nile Archer", cost: 45, attack: 6, defense: 4, description: "Expert marksman trained along the river" },
          { name: "War Chariot", cost: 100, attack: 10, defense: 7, description: "Golden chariot of the pharaoh's army" },
          { name: "Pyramid Builder", cost: 30, attack: 2, defense: 6, description: "Worker who doubles as defensive engineer" }
        ],
        assyrianTroops: [
          { name: "Iron Warrior", cost: 70, attack: 9, defense: 6, description: "Fierce fighter with early iron weapons" },
          { name: "Siege Engineer", cost: 55, attack: 5, defense: 7, description: "Specialist in breaking enemy fortifications" },
          { name: "Horse Archer", cost: 90, attack: 8, defense: 5, description: "Mobile cavalry with composite bow" },
          { name: "Cataphract", cost: 120, attack: 11, defense: 9, description: "Heavily armored cavalry shock trooper" }
        ],
        babylonianTroops: [
          { name: "Code Bearer", cost: 50, attack: 5, defense: 5, description: "Scholar-warrior who inspires troops with law" },
          { name: "Ziggurat Guard", cost: 65, attack: 6, defense: 8, description: "Temple defender with sacred bronze weapons" },
          { name: "Astrologer", cost: 40, attack: 3, defense: 4, description: "Mystic who predicts enemy movements" },
          { name: "Trade Caravan", cost: 80, attack: 4, defense: 6, description: "Merchant guard that generates bonus gold" }
        ],
        scrollCost: 1000,
        nextCiv: "Iron Age"
      },
      {
        name: "Iron Age Empire",
        displayName: "Iron Age",
        description: "Iron technology has made your armies formidable. Your empire expands across vast territories.",
        bonus: "+40% military strength",
        troops: [
          { name: "Legionnaire", cost: 60, attack: 8, defense: 7, description: "Professional soldier with iron weapons" },
          { name: "Cavalry", cost: 100, attack: 10, defense: 6, description: "Mounted warrior with iron sword" },
          { name: "Siege Engine", cost: 150, attack: 12, defense: 4, description: "Catapult for breaking fortifications" }
        ],
        scrollCost: 2000,
        nextCiv: "Medieval Age"
      },
      {
        name: "Medieval Kingdom",
        displayName: "Medieval Age",
        description: "Knights in shining armor defend your realm. Castles dot the landscape as feudalism takes hold.",
        bonus: "+50% defensive structures",
        troops: [
          { name: "Knight", cost: 120, attack: 12, defense: 10, description: "Heavily armored mounted warrior" },
          { name: "Crossbowman", cost: 70, attack: 7, defense: 5, description: "Skilled marksman with crossbow" },
          { name: "Catapult", cost: 200, attack: 15, defense: 3, description: "Medieval siege weapon" }
        ],
        scrollCost: 4000,
        nextCiv: "Renaissance"
      },
      {
        name: "Renaissance Nation",
        displayName: "Renaissance",
        description: "Art, science, and gunpowder transform your civilization. New World exploration brings wealth.",
        bonus: "+60% trade income",
        troops: [
          { name: "Musketeer", cost: 150, attack: 14, defense: 8, description: "Soldier with early firearm" },
          { name: "Pikeman", cost: 90, attack: 9, defense: 12, description: "Infantry with long spear formation" },
          { name: "Cannon", cost: 300, attack: 20, defense: 5, description: "Powerful gunpowder artillery" }
        ],
        scrollCost: 8000,
        nextCiv: "Industrial Age"
      },
      {
        name: "Industrial Empire",
        displayName: "Industrial Age",
        description: "Steam and steel power your growing empire. Factories churn out weapons of war.",
        bonus: "+70% production efficiency",
        troops: [
          { name: "Rifleman", cost: 200, attack: 16, defense: 10, description: "Soldier with rifled firearm" },
          { name: "Artillery", cost: 400, attack: 25, defense: 6, description: "Long-range explosive cannon" },
          { name: "Ironclad", cost: 600, attack: 20, defense: 15, description: "Armored steam warship" }
        ],
        scrollCost: 15000,
        nextCiv: "Modern Era"
      },
      {
        name: "Modern Superpower",
        displayName: "Modern Era",
        description: "Electricity and advanced machinery dominate. Your military is mechanized and deadly.",
        bonus: "+80% technological advancement",
        troops: [
          { name: "Infantry", cost: 250, attack: 18, defense: 12, description: "Modern soldier with automatic weapons" },
          { name: "Tank", cost: 800, attack: 30, defense: 20, description: "Armored fighting vehicle" },
          { name: "Fighter Plane", cost: 1000, attack: 35, defense: 8, description: "Air superiority fighter" }
        ],
        scrollCost: 30000,
        nextCiv: "Space Age"
      },
      {
        name: "Space Civilization",
        displayName: "Space Age",
        description: "You have reached the stars! Advanced technology allows interplanetary expansion.",
        bonus: "+100% all bonuses - Civilization Complete!",
        troops: [
          { name: "Space Marine", cost: 500, attack: 25, defense: 20, description: "Elite soldier with energy weapons" },
          { name: "Mech Warrior", cost: 1200, attack: 40, defense: 25, description: "Pilot in giant robot suit" },
          { name: "Starship", cost: 2000, attack: 50, defense: 30, description: "Interstellar combat vessel" }
        ],
        scrollCost: 0,
        nextCiv: "Victory!"
      }
    ];

    this.currentCivIndex = 0;
    this.gold = 100;
    this.population = 50;
    this.army = {};

    this.checkForSavedGame();
  }

  checkForSavedGame() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const nameScreen = document.getElementById('name-selection-screen');
    const saveOptions = document.getElementById('save-options');

    // Check for cloud save in URL first
    const urlParams = new URLSearchParams(window.location.search);
    const cloudSave = urlParams.get('save');
    
    let savedGame = null;
    
    if (cloudSave) {
      try {
        savedGame = JSON.parse(atob(cloudSave));
        localStorage.setItem('civilizationWars_save', JSON.stringify(savedGame));
      } catch (error) {
        console.log('Failed to load cloud save:', error);
      }
    }
    
    // Fall back to local save
    if (!savedGame) {
      const localSave = localStorage.getItem('civilizationWars_save');
      if (localSave) {
        savedGame = JSON.parse(localSave);
      }
    }

    // Always start with welcome screen visible
    welcomeScreen.style.display = 'block';
    nameScreen.style.display = 'none';
    document.getElementById('civilization-selection-screen').style.display = 'none';

    if (savedGame) {
      saveOptions.style.display = 'block';
      document.getElementById('no-save-options').style.display = 'none';
    } else {
      saveOptions.style.display = 'none';
      document.getElementById('no-save-options').style.display = 'block';
    }

    this.setupWelcomeScreenListeners();
  }

  setupWelcomeScreenListeners() {
    const newGameBtn = document.getElementById('new-game-btn');
    const loadGameBtn = document.getElementById('load-game-btn');
    const startGameBtn = document.getElementById('start-game-btn');

    if (newGameBtn) {
      newGameBtn.addEventListener('click', () => {
        localStorage.removeItem('civilizationWars_save');
        this.showNameSelection();
      });
    }

    if (loadGameBtn) {
      loadGameBtn.addEventListener('click', () => {
        this.loadGame();
      });
    }

    if (startGameBtn) {
      startGameBtn.addEventListener('click', () => {
        this.showNameSelection();
      });
    }
  }

  showNameSelection() {
    // Hide all screens
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('civilization-selection-screen').style.display = 'none';
    document.getElementById('game-header').style.display = 'none';
    document.getElementById('main-game').style.display = 'none';
    
    // Show only name selection
    document.getElementById('name-selection-screen').style.display = 'block';
    this.setupNameScreenListeners();
  }

  setupNameScreenListeners() {
    const playerNameInput = document.getElementById('player-name');
    const continueBtn = document.getElementById('continue-btn');

    // Clear any existing value and reset button state
    playerNameInput.value = '';
    continueBtn.disabled = true;

    // Remove existing listeners to prevent duplicates
    playerNameInput.replaceWith(playerNameInput.cloneNode(true));
    const newInput = document.getElementById('player-name');
    
    continueBtn.replaceWith(continueBtn.cloneNode(true));
    const newContinueBtn = document.getElementById('continue-btn');

    newInput.addEventListener('input', () => {
      newContinueBtn.disabled = newInput.value.trim().length === 0;
    });

    newContinueBtn.addEventListener('click', () => {
      this.playerName = newInput.value.trim();
      this.showCivilizationSelection();
    });
  }

  showCivilizationSelection() {
    // Hide all screens
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('name-selection-screen').style.display = 'none';
    document.getElementById('game-header').style.display = 'none';
    document.getElementById('main-game').style.display = 'none';
    
    // Show only civilization selection
    document.getElementById('civilization-selection-screen').style.display = 'block';
    
    // Show Bronze Age options if player has unlocked them or for new selection
    this.showBronzeAgeOptions();
    this.setupCivilizationSelection();
  }

  showBronzeAgeOptions() {
    const advancedCivs = document.getElementById('advanced-civs');
    const bronzeChoices = document.querySelectorAll('.civ-choice[data-civ^="bronze-"]');
    
    // Always show Bronze Age options as selectable
    advancedCivs.style.display = 'block';
    bronzeChoices.forEach(choice => {
      choice.classList.remove('disabled');
    });
  }

  setupCivilizationSelection() {
    const civChoices = document.querySelectorAll('.civ-choice:not(.disabled)');

    civChoices.forEach(choice => {
      choice.addEventListener('click', () => {
        // Allow both Stone Age and Bronze Age civilizations
        const allowedCivs = ['cavemen', 'nomads', 'settlers', 'bronze-egypt', 'bronze-assyrian', 'bronze-babylonian'];
        
        if (allowedCivs.includes(choice.dataset.civ)) {
          civChoices.forEach(c => c.classList.remove('selected'));
          choice.classList.add('selected');
          this.selectedCivilization = choice.dataset.civ;

          setTimeout(() => {
            this.startGame();
          }, 500);
        }
      });
    });
  }

  startGame() {
    const civType = this.civilizationTypes[this.selectedCivilization];
    this.currentCivIndex = civType.startIndex;

    // Apply starting bonuses based on civilization
    if (this.selectedCivilization === 'settlers') {
      this.gold = 150; // Settlers start with more gold due to early agriculture
    } else if (this.selectedCivilization === 'cavemen') {
      this.population = 75; // Cavemen start with more population
    }

    // Update civilization description with selected type
    this.civilizations[this.currentCivIndex].name = civType.name;
    this.civilizations[this.currentCivIndex].description = civType.description;
    this.civilizations[this.currentCivIndex].bonus = civType.bonus;

    // Hide all menu screens
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('name-selection-screen').style.display = 'none';
    document.getElementById('civilization-selection-screen').style.display = 'none';
    
    // Show only game
    document.getElementById('game-header').style.display = 'block';
    document.getElementById('main-game').style.display = 'grid';

    document.getElementById('player-name-display').textContent = `Commander: ${this.playerName}`;

    this.gameStarted = true;
    this.initializeGame();
    this.saveGame();
  }

  initializeGame() {
    this.updateDisplay();
    this.setupEventListeners();
    this.displayTroops();
    this.updateArmyDisplay();
  }

  async saveGame() {
    if (!this.gameStarted) return;

    const saveData = {
      playerName: this.playerName,
      selectedCivilization: this.selectedCivilization,
      currentCivIndex: this.currentCivIndex,
      gold: this.gold,
      population: this.population,
      army: this.army,
      timestamp: Date.now()
    };

    // Save locally as backup
    localStorage.setItem('civilizationWars_save', JSON.stringify(saveData));
    
    // Save to cloud (GitHub-compatible storage)
    try {
      await this.saveToCloud(saveData);
    } catch (error) {
      console.log('Cloud save failed, using local save:', error);
    }
  }

  async saveToCloud(saveData) {
    // Use a simple cloud storage solution that works with GitHub Pages
    const saveKey = `civilizationWars_${this.playerName.replace(/[^a-zA-Z0-9]/g, '_')}`;
    
    // Store in URL parameters for GitHub Pages compatibility
    const encodedSave = btoa(JSON.stringify(saveData));
    const url = new URL(window.location);
    url.searchParams.set('save', encodedSave);
    
    // Update URL without reloading
    window.history.replaceState({}, '', url);
    
    // Also try to save to localStorage with cloud key
    localStorage.setItem(`cloud_${saveKey}`, JSON.stringify(saveData));
  }

  loadGame() {
    // Try cloud save first, then local save
    const urlParams = new URLSearchParams(window.location.search);
    const cloudSave = urlParams.get('save');
    
    let saveData = null;
    
    if (cloudSave) {
      try {
        saveData = JSON.parse(atob(cloudSave));
      } catch (error) {
        console.log('Failed to load cloud save:', error);
      }
    }
    
    if (!saveData) {
      const savedGame = localStorage.getItem('civilizationWars_save');
      if (!savedGame) return;
      saveData = JSON.parse(savedGame);
    }

    this.playerName = saveData.playerName;
    this.selectedCivilization = saveData.selectedCivilization;
    this.currentCivIndex = saveData.currentCivIndex;
    this.gold = saveData.gold;
    this.population = saveData.population;
    this.army = saveData.army || {};

    // Apply civilization type modifications
    const civType = this.civilizationTypes[this.selectedCivilization];
    this.civilizations[this.currentCivIndex].name = civType.name;
    this.civilizations[this.currentCivIndex].description = civType.description;
    this.civilizations[this.currentCivIndex].bonus = civType.bonus;

    // Hide all menu screens
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('name-selection-screen').style.display = 'none';
    document.getElementById('civilization-selection-screen').style.display = 'none';
    
    // Show only game
    document.getElementById('game-header').style.display = 'block';
    document.getElementById('main-game').style.display = 'grid';

    document.getElementById('player-name-display').textContent = `Commander: ${this.playerName}`;

    this.gameStarted = true;
    this.initializeGame();

    this.logMessage(`Welcome back, ${this.playerName}! Game loaded successfully.`);
  }

  setupEventListeners() {
    document.getElementById('hunt-button').addEventListener('click', () => this.hunt());
    document.getElementById('raid-button').addEventListener('click', () => this.raid());
    document.getElementById('buy-scroll').addEventListener('click', () => this.buyScroll());
    
    // Share save functionality
    document.getElementById('share-save-btn').addEventListener('click', () => this.showShareModal());
    document.getElementById('copy-url-btn').addEventListener('click', () => this.copyShareUrl());
    document.getElementById('close-modal-btn').addEventListener('click', () => this.closeShareModal());
  }

  showShareModal() {
    const modal = document.getElementById('share-modal');
    const shareUrl = document.getElementById('share-url');
    
    // Get current URL with save data
    const currentUrl = window.location.href;
    shareUrl.value = currentUrl;
    
    modal.style.display = 'block';
  }

  copyShareUrl() {
    const shareUrl = document.getElementById('share-url');
    shareUrl.select();
    shareUrl.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(shareUrl.value).then(() => {
      this.logMessage('Save URL copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      document.execCommand('copy');
      this.logMessage('Save URL copied to clipboard!');
    });
  }

  closeShareModal() {
    document.getElementById('share-modal').style.display = 'none';
  }

  getCurrentCiv() {
    return this.civilizations[this.currentCivIndex];
  }

  updateDisplay() {
    const civ = this.getCurrentCiv();
    document.getElementById('civilization').textContent = civ.displayName;
    document.getElementById('money').textContent = `Gold: ${this.gold}`;
    document.getElementById('population').textContent = `Population: ${this.population}`;

    document.getElementById('civ-name').textContent = civ.name;
    document.getElementById('civ-description').textContent = civ.description;
    document.getElementById('civ-bonus').textContent = `Bonus: ${civ.bonus}`;

    const nextCiv = this.civilizations[this.currentCivIndex + 1];
    if (nextCiv) {
      document.getElementById('next-civ').textContent = `Next: ${nextCiv.displayName}`;
      document.getElementById('scroll-cost').textContent = `Advancement Scroll Cost: ${civ.scrollCost} Gold`;
      document.getElementById('buy-scroll').disabled = this.gold < civ.scrollCost;
    } else {
      document.getElementById('next-civ').textContent = 'Civilization Complete!';
      document.getElementById('scroll-cost').textContent = 'You have reached the Space Age!';
      document.getElementById('buy-scroll').style.display = 'none';
    }
  }

  displayTroops() {
    const civ = this.getCurrentCiv();
    const troopOptions = document.getElementById('troop-options');
    troopOptions.innerHTML = '';

    let troops = civ.troops;

    // Use civilization-specific troops for Bronze Age
    if (this.currentCivIndex === 1) {
      if (this.selectedCivilization === 'bronze-egypt') {
        troops = civ.egyptianTroops;
      } else if (this.selectedCivilization === 'bronze-assyrian') {
        troops = civ.assyrianTroops;
      } else if (this.selectedCivilization === 'bronze-babylonian') {
        troops = civ.babylonianTroops;
      }
    }

    troops.forEach(troop => {
      const troopCard = document.createElement('div');
      troopCard.className = 'troop-card';
      troopCard.innerHTML = `
        <div class="troop-info">
          <div class="troop-name">${troop.name}</div>
          <div class="troop-stats">Attack: ${troop.attack} | Defense: ${troop.defense} | Cost: ${troop.cost} Gold</div>
          <div style="font-size: 0.8em; color: #666;">${troop.description}</div>
        </div>
        <button class="recruit-btn" onclick="game.recruitTroop('${troop.name}')" ${this.gold < troop.cost ? 'disabled' : ''}>
          Recruit
        </button>
      `;
      troopOptions.appendChild(troopCard);
    });
  }

  recruitTroop(troopName) {
    const civ = this.getCurrentCiv();
    let troop = civ.troops.find(t => t.name === troopName);

    // Check civilization-specific troops for Bronze Age
    if (!troop && this.currentCivIndex === 1) {
      if (this.selectedCivilization === 'bronze-egypt') {
        troop = civ.egyptianTroops.find(t => t.name === troopName);
      } else if (this.selectedCivilization === 'bronze-assyrian') {
        troop = civ.assyrianTroops.find(t => t.name === troopName);
      } else if (this.selectedCivilization === 'bronze-babylonian') {
        troop = civ.babylonianTroops.find(t => t.name === troopName);
      }
    }

    if (this.gold >= troop.cost) {
      this.gold -= troop.cost;
      this.army[troopName] = (this.army[troopName] || 0) + 1;

      let populationGrowth = 1;
      let bonusGold = 0;

      // Civilization-specific bonuses
      if (this.selectedCivilization === 'cavemen') {
        populationGrowth = Math.floor(Math.random() > 0.25 ? 2 : 1); // 25% chance for +1 extra
      } else if (this.selectedCivilization === 'bronze-egypt' && troopName === 'Pyramid Builder') {
        populationGrowth = 2; // Pyramid builders bring more workers
      } else if (this.selectedCivilization === 'bronze-babylonian' && troopName === 'Trade Caravan') {
        bonusGold = Math.floor(Math.random() * 20) + 10; // Trade caravans generate bonus gold
      }

      this.population += populationGrowth;
      this.gold += bonusGold;

      let message = `Recruited 1 ${troopName} for ${troop.cost} gold.`;
      if (populationGrowth > 1) message += ' Population bonus!';
      if (bonusGold > 0) message += ` Trade bonus: +${bonusGold} gold!`;

      this.logMessage(message);
      this.updateDisplay();
      this.displayTroops();
      this.updateArmyDisplay();
      this.saveGame();
    }
  }

  updateArmyDisplay() {
    const armyDisplay = document.getElementById('army-display');
    armyDisplay.innerHTML = '';

    Object.keys(this.army).forEach(troopName => {
      if (this.army[troopName] > 0) {
        const unitDiv = document.createElement('div');
        unitDiv.className = 'army-unit';
        unitDiv.innerHTML = `
          <span class="unit-name">${troopName}</span>
          <span class="unit-count">${this.army[troopName]}</span>
        `;
        armyDisplay.appendChild(unitDiv);
      }
    });

    if (Object.keys(this.army).length === 0) {
      armyDisplay.innerHTML = '<p style="color: #666; font-style: italic;">No troops recruited yet</p>';
    }
  }

  hunt() {
    const civ = this.getCurrentCiv();
    const totalArmy = Object.values(this.army).reduce((sum, count) => sum + count, 0);

    if (totalArmy === 0) {
      this.logMessage("You need troops to hunt effectively!");
      return;
    }

    const baseReward = 20 + Math.floor(Math.random() * 30);
    let bonus = 1;

    // Apply civilization bonuses
    if (this.currentCivIndex === 0) bonus = 1.25; // Stone Age hunting bonus
    if (this.currentCivIndex >= 4) bonus = 1.6; // Renaissance trade bonus

    // Apply selected civilization bonuses
    if (this.selectedCivilization === 'nomads') {
      bonus *= 1.3; // +30% hunting rewards
    } else if (this.selectedCivilization === 'settlers') {
      bonus *= 1.35; // +35% gold income
    } else if (this.selectedCivilization === 'bronze-egypt') {
      bonus *= 1.4; // +40% gold income from Nile trade
    } else if (this.selectedCivilization === 'bronze-babylonian') {
      bonus *= 1.25; // +25% trade efficiency
      if (this.army['Trade Caravan']) {
        bonus *= 1.1; // Additional bonus from caravans
      }
    }

    const reward = Math.floor(baseReward * totalArmy * 0.1 * bonus);
    this.gold += reward;

    let events = [
      "hunted wild animals successfully",
      "found rich mineral deposits", 
      "discovered enemy supply cache",
      "completed successful raid on bandits",
      "found ancient treasure",
      "traded with friendly merchants"
    ];

    // Civilization-specific events
    if (this.selectedCivilization === 'bronze-egypt') {
      events = [
        "sailed Nile trade routes successfully",
        "discovered gold in royal tombs",
        "traded papyrus for bronze",
        "collected taxes from river settlements",
        "found treasure in pyramid chamber"
      ];
    } else if (this.selectedCivilization === 'bronze-assyrian') {
      events = [
        "conquered enemy fortress",
        "seized tribute from vassal states",
        "captured enemy supply train",
        "won decisive cavalry charge",
        "intimidated enemies into surrender"
      ];
    } else if (this.selectedCivilization === 'bronze-babylonian') {
      events = [
        "negotiated profitable trade agreement",
        "collected taxes using written law",
        "discovered astronomical treasure",
        "traded cuneiform tablets for gold",
        "received tribute from client cities"
      ];
    }

    const event = events[Math.floor(Math.random() * events.length)];
    this.logMessage(`Your forces ${event} and earned ${reward} gold!`);

    this.updateDisplay();
    this.displayTroops();
    this.saveGame();
  }

  raid() {
    const totalArmy = Object.values(this.army).reduce((sum, count) => sum + count, 0);

    if (totalArmy === 0) {
      this.logMessage("You need an army to raid!");
      return;
    }

    const civ = this.getCurrentCiv();
    let totalAttack = 0;

    Object.keys(this.army).forEach(troopName => {
      let troop = civ.troops.find(t => t.name === troopName);
      
      // Check civilization-specific troops for Bronze Age
      if (!troop && this.currentCivIndex === 1) {
        if (this.selectedCivilization === 'bronze-egypt') {
          troop = civ.egyptianTroops.find(t => t.name === troopName);
        } else if (this.selectedCivilization === 'bronze-assyrian') {
          troop = civ.assyrianTroops.find(t => t.name === troopName);
        } else if (this.selectedCivilization === 'bronze-babylonian') {
          troop = civ.babylonianTroops.find(t => t.name === troopName);
        }
      }

      if (troop) {
        totalAttack += troop.attack * this.army[troopName];
      }
    });

    // Apply civilization attack bonuses
    if (this.selectedCivilization === 'nomads') {
      totalAttack *= 1.15; // +15% movement/attack speed
    } else if (this.selectedCivilization === 'cavemen') {
      totalAttack *= 0.95; // Cavemen get defensive bonus, slight attack penalty
    } else if (this.selectedCivilization === 'bronze-assyrian') {
      totalAttack *= 1.35; // +35% military strength
    } else if (this.selectedCivilization === 'bronze-babylonian' && this.army['Astrologer']) {
      totalAttack *= 1.2; // Astrologers predict enemy movements
    }

    const enemyStrength = 50 + (this.currentCivIndex * 20) + Math.floor(Math.random() * 40);

    if (totalAttack > enemyStrength) {
      let reward = Math.floor((totalAttack - enemyStrength) * 2 + Math.random() * 100);

      // Apply civilization conquest bonuses
      if (this.selectedCivilization === 'settlers') {
        reward *= 1.1; // +10% better rewards from advanced tactics
      } else if (this.selectedCivilization === 'bronze-assyrian') {
        reward *= 1.2; // +20% conquest rewards
      } else if (this.selectedCivilization === 'bronze-egypt') {
        reward *= 1.4; // +40% gold income
      }

      this.gold += reward;
      this.logMessage(`Victory! Your army defeated the enemy and looted ${reward} gold!`);
    } else {
      let losses = Math.floor(Math.random() * 3) + 1;

      // Defensive bonuses
      if (this.selectedCivilization === 'cavemen') {
        losses = Math.max(1, Math.floor(losses * 0.8)); // 20% less losses
      } else if (this.selectedCivilization === 'bronze-egypt' && this.army['Pharaoh\'s Guard']) {
        losses = Math.max(1, Math.floor(losses * 0.7)); // Elite guards protect army
      }

      const troopTypes = Object.keys(this.army).filter(t => this.army[t] > 0);
      if (troopTypes.length > 0) {
        const lostTroop = troopTypes[Math.floor(Math.random() * troopTypes.length)];
        this.army[lostTroop] = Math.max(0, this.army[lostTroop] - losses);
        this.population -= losses;
        this.logMessage(`Defeat! Lost ${losses} ${lostTroop}(s) in battle.`);
      } else {
        this.logMessage("Defeat! Your army retreated but survived.");
      }
    }

    this.updateDisplay();
    this.displayTroops();
    this.updateArmyDisplay();
    this.saveGame();
  }

  buyScroll() {
    const civ = this.getCurrentCiv();

    if (this.gold >= civ.scrollCost && this.currentCivIndex < this.civilizations.length - 1) {
      this.gold -= civ.scrollCost;
      this.currentCivIndex++;

      // Reset army for new civilization
      this.army = {};
      this.population = Math.floor(this.population * 1.5); // Population grows with advancement

      const newCiv = this.getCurrentCiv();
      this.logMessage(`🎉 Civilization Advanced! Welcome to the ${newCiv.displayName}!`);

      if (this.currentCivIndex === this.civilizations.length - 1) {
        this.logMessage("🚀 Congratulations! You've reached the Space Age and won the game!");
      }

      this.updateDisplay();
      this.displayTroops();
      this.updateArmyDisplay();
      this.saveGame();
    }
  }

  logMessage(message) {
    const battleLog = document.getElementById('battle-log');
    const timestamp = new Date().toLocaleTimeString();
    battleLog.innerHTML += `<div>[${timestamp}] ${message}</div>`;
    battleLog.scrollTop = battleLog.scrollHeight;
  }
}

// Initialize game when page loads
let game;
window.addEventListener('load', () => {
  game = new CivilizationGame();
});
