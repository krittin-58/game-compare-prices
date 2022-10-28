<template>
  <v-container>
    <v-row>
      <v-col md="4" sm="6" xs="12" v-for="(store, index) in filterStoreIsActive" :key="index">
        <v-card class="d-flex flex-no-wrap justify-space-between">
          <v-img class="ma-1" width="80" height="80" aspect-ratio="1" :src="setupImageURL(store.images.logo)" :lazy-src="setupImageURL(store.images.logo)">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-divider></v-divider>
          <v-card-text>
            <v-card-title class="text-h5">{{ store.storeName }}</v-card-title>
            <!-- Steam -->
            <template v-if="store.storeName == 'Steam'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in steamDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Humble Store -->
            <template v-if="store.storeName == 'Humble Store'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in humbleDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- GamersGate -->
            <template v-if="store.storeName == 'GamersGate'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in gamerGateDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- GreenManGaming -->
            <template v-if="store.storeName == 'GreenManGaming'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in greenManGamingDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Direct2Drive -->
            <template v-if="store.storeName == 'Direct2Drive'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in direct2DriveDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- GOG -->
            <template v-if="store.storeName == 'GOG'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in gogDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Origin -->
            <template v-if="store.storeName == 'Origin'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in originDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Ubisoft Uplay -->
            <template v-if="store.storeName == 'Uplay'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in ubisoftDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Fanatical -->
            <template v-if="store.storeName == 'Fanatical'">
              <v-simple-table dense >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in fanaticalDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- WinGameStore -->
            <template v-if="store.storeName == 'WinGameStore'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in fanaticalDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- GameBillet -->
            <template v-if="store.storeName == 'GameBillet'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in gameBilletDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Voidu -->
            <template v-if="store.storeName == 'Voidu'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in voiduDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Epic Game Store -->
            <template v-if="store.storeName == 'Epic Games Store'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in epicDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- Game Planet -->
            <template v-if="store.storeName == 'Gamesplanet'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in gamePlanetDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- GamesLoad -->
            <template v-if="store.storeName == 'Gamesload'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in gamesLoadDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- 2Game -->
            <template v-if="store.storeName == '2Game'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in twoGamesDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- indieGala -->
            <template v-if="store.storeName == 'IndieGala'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in indieGalaDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- blizzard shop -->
            <template v-if="store.storeName == 'Blizzard Shop'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in blizzardDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- all you play -->
            <template v-if="store.storeName == 'AllYouPlay'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in allYouPlayDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- dlGamer -->
            <template v-if="store.storeName == 'DLGamer'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in dlGamerDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <!-- noctre -->
            <template v-if="store.storeName == 'Noctre'">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in noctreDeals" :key="index">
                      <td>{{ deal.title }}</td>
                      <td class="text-decoration-line-through">{{ deal.normalPrice }}</td>
                      <td><v-chip small>{{ deal.salePrice }}</v-chip></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import cheapshark from '@/api/cheapshark/index'
  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        listGames: [],
        listDeals: [],
        listStores: [],

        steam: [], 
        humblebundle: [], 
        gamerGate: [], 
        greenManGaming: [], 
        direct2Drive: [], 
        gog: [],
        origin: [],
        ubisoft: [],
        fanatical: [],
        wingamestore: [],
        gameBillet: [],
        voidu: [],
        epicGameStore: [],
        gamePlanet: [],
        gamesload: [],
        twoGames: [],
        indieGala: [],
        blizzardShop: [],
        allYouPlay: [],
        dlGamer: [],
        noctre: [],
      }
    },

    computed: {
      steamDeals () {
        return this.steam.splice(0, 5)
      },

      humbleDeals () {
        return this.humblebundle.splice(0, 5)
      },

      gamerGateDeals () {
        return this.gamerGate.splice(0, 5)
      },

      greenManGamingDeals () {
        return this.greenManGaming.splice(0, 5)
      },

      direct2DriveDeals () {
        return this.direct2Drive.splice(0, 5)
      },

      gogDeals () {
        return this.gog.splice(0, 5)
      },

      originDeals () {
        return this.origin.splice(0, 5)
      },

      ubisoftDeals () {
        return this.ubisoft.splice(0, 5)
      },

      fanaticalDeals () {
        return this.fanatical.splice(0, 5)
      },

      gameBilletDeals () {
        return this.gameBillet.splice(0, 5)
      },

      voiduDeals () {
        return this.voidu.splice(0, 5)
      },

      epicDeals () {
        return this.epicGameStore.splice(0, 5)
      },

      gamePlanetDeals () {
        return this.gamePlanet.splice(0, 5)
      },

      gamesLoadDeals () {
        return this.gamesload.splice(0, 5)
      },

      twoGamesDeals () {
        return this.twoGames.splice(0, 5)
      },

      indieGalaDeals () {
        return this.indieGala.splice(0, 5)
      },

      blizzardDeals () {
        return this.blizzardShop.splice(0, 5)
      },

      allYouPlayDeals () {
        return this.allYouPlay.splice(0, 5)
      },

      dlGamerDeals () {
        return this.dlGamer.splice(0, 5)
      },

      noctreDeals () {
        return this.noctre.splice(0, 5)
      },

      filterStoreIsActive () {
        return this.listStores.filter((data) => {
          if (data.isActive) {
            return data
          }
        })
      },
    },

    created () {
      this.getAllDeals()
      this.getAllStores()
    },

    methods: {

      async getAllDeals () {
        const response = await cheapshark.gameDeals()
        const steamDeals = await cheapshark.gameDeals({ storeID: 1})
        const humblebundle = await cheapshark.gameDeals({ storeID: 11 })
        const gamerGate = await cheapshark.gameDeals({ storeID: 2 })
        const greenManGaming = await cheapshark.gameDeals({ storeID: 3 })
        const direct2Drive = await cheapshark.gameDeals({ storeID: 6 })
        const gog = await cheapshark.gameDeals({ storeID: 7})
        const origin = await cheapshark.gameDeals({ storeID: 8 })
        const ubisoft = await cheapshark.gameDeals({ storeID: 13 })
        const fanatical = await cheapshark.gameDeals({ storeID: 15 })
        const wingamestore = await cheapshark.gameDeals({ storeID: 21 })
        const gameBillet = await cheapshark.gameDeals({ storeID: 23 })
        const voidu = await cheapshark.gameDeals({ storeID: 24 })
        const epic = await cheapshark.gameDeals({ storeID: 25 })
        const gamePlanet = await cheapshark.gameDeals({ storeID: 27 })
        const gamesload = await cheapshark.gameDeals({ storeID: 28 })
        const twoGames = await cheapshark.gameDeals({ storeID: 29 })
        const indieGala = await cheapshark.gameDeals({ storeID: 30 })
        const blizzardShop = await cheapshark.gameDeals({ storeID: 31 })
        const allYouPlay = await cheapshark.gameDeals({ storeID: 32 })
        const dlGamer = await cheapshark.gameDeals({ storeID: 33 })
        const noctre = await cheapshark.gameDeals({ storeID: 34 })

        const nameStores = [ 
          steamDeals, humblebundle, gamerGate, greenManGaming, direct2Drive, 
          gog, origin, ubisoft, fanatical, wingamestore, gameBillet, voidu, epic,
          gamePlanet, gamesload, twoGames, indieGala, blizzardShop, allYouPlay, dlGamer,
          noctre
        ]

        const nameArray = [
          'steam', 'humblebundle', 'gamerGate', 'greenManGaming', 'direct2Drive', 
          'gog', 'origin', 'ubisoft', 'fanatical', 'wingamestore', 'gameBillet',
          'voidu', 'epicGameStore', 'gamePlanet', 'gamesload', 'twoGames', 'indieGala', 'blizzardShop',
          'allYouPlay', 'dlGamer', 'noctre'
        ]

        if (response) {
          this.listDeals = response
        }
        
        for (let i = 0; nameStores[i] ? nameStores[i].length : 0; i++) {
          if (nameStores[i]) {
            this[nameArray[i]] = await nameStores[i]
            // this.$store.commit(nameArray[i], nameStores[i])
          }
        }
      },

      async getAllStores () {
        const response = await cheapshark.storeInfo()
        if (response) {
          this.listStores = response
        }
      },

      setupImageURL (path) {
        if (path) {
          return `https://www.cheapshark.com/${path}`
        }
      },
    },
  }
</script>
