<template>
  <v-container>
    <v-row>
			<v-col>
				<v-toolbar flat>
					<v-toolbar-title>Search</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-row>
						<v-col offset="3">
							<v-text-field v-model="searchGame" label="type you game name" outlined hide-details="auto" dense></v-text-field>
						</v-col>
					</v-row>
				</v-toolbar>
				<v-data-table 
						:headers="headers"
						fixed-header 
						:items="listDeals" 
						item-key="dealID"
						show-select dense
						v-model="selected"
						:search.sync="searchGame"
					>
					<template v-slot:[`item.thumb`]="{ item }">
						<v-img class="ma-1" max-height="60" max-width="150" aspect-ratio="1" :src="item.thumb" :lazy-src="item.thumb"></v-img>
					</template>
					<template v-slot:[`item.storeID`]="{ item }">
						<v-img 
							max-height="80" max-width="80" contain 
							:lazy-src="setupImageURL(filterStoreIsActive[item.storeID] ? filterStoreIsActive[item.storeID].images.logo : null)"
							:src="setupImageURL(filterStoreIsActive[item.storeID] ? filterStoreIsActive[item.storeID].images.logo : null)">
						</v-img>
						
					</template>
					<template v-slot:[`item.actions`]="{ item }">
						<v-btn depressed @click="setupAlert(item)" class="indigo white--text">Price Alert<v-icon right>mdi-bell</v-icon></v-btn>
					</template>
				</v-data-table>
			</v-col>
    </v-row>

		
  </v-container>
</template>

<script>
import cheapshark from '@/api/cheapshark/index'
import { mapGetters, mapState } from 'vuex';
export default {
	name: 'BrowserView',
	data () {
		return {
			headers: [
				{ text: 'Thumb', value: 'thumb', width: 150, },
				{ text: 'Title', value: 'title' },
				{ text: 'Store', value: 'storeID' },
				{ text: 'Normal Price', value: 'normalPrice' },
				{ text: 'Sale Price', value: 'salePrice' },
				{ text: 'Actions', value: 'actions' },
			],
			storeId: this.$route.query.storeID,
			selected: [],
			searchGame: null,
			emailAlert: null,
			priceAlert: 0,
		}
	},

	computed: {
		...mapState(['listDeals', 'alertConfig', 'listStores']),

		filterStoreIsActive () {
			return this.listStores.filter((data) => {
				if (data) {
					return data
				}
			})
		},
	},

	methods: {
		setupAlert (item) {
			if (item) {
				this.$store.commit('setAlertConfig', {
					action: 'set',
					email: this.emailAlert,
					gameID: item.gameID,
					price: this.priceAlert
				})
			}
		},

		clearAlert () {
			this.$store.commit('clearAlertConfig')
		},

		setupImageURL (path) {
			if (path) {
				return `https://www.cheapshark.com/${path}`
			}
		},
	},
}
</script>

<style>

</style>