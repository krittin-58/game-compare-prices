<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

				<v-btn outlined to="/" class="ma-1">Home</v-btn> 
				<v-btn outlined to="/browser">Browsers</v-btn>
			
			<v-spacer></v-spacer>

        <v-dialog v-model="popupAlert" max-width="500" persistent>
					<template v-slot:activator="{ on, attrs }">
						<v-btn @click="setupAlertPrice" v-bind="attrs" v-on="on" icon><v-icon>mdi-bell</v-icon></v-btn>
					</template>
					<v-card>
						<v-toolbar flat class="primary white--text">
							<v-toolbar-title>Setup Price Alert</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-btn @click="closeAlert" icon><v-icon>mdi-close</v-icon></v-btn>
						</v-toolbar>
						<v-divider></v-divider>
						<br/>
						<v-card-text>
							<v-row>
								<v-col>
									<v-text-field v-model="configAlert.email" label="Email Address" outlined dense hide-details="auto" type="email"></v-text-field>
								</v-col>
							</v-row>
						</v-card-text>
						<v-divider></v-divider>
						<v-card-actions>
							<v-btn disabled @click="confirmSetupAlert" block class="teal lighten-1 white--text">Setup Alert<v-icon right>mdi-content-save</v-icon></v-btn>
						</v-card-actions>
					</v-card>
        </v-dialog>
    </v-app-bar>
</template>

<script>
import cheapshark from '@/api/cheapshark';
export default {
	name: 'NavMenu',
	props: {
		title: {
			type: String,
			default: 'Title'
		},
		emailAlert: {
			type: String,
			default: null
		},
		actionAlert: {
			type: String,
			default: 'set' // set / delete
		},
		gameId: {
			type: Number,
		},
		priceAlert: {
			type: Number
		},
	},

	data () {
		return {
			popupAlert: false,
			resultAlert: false,
			configAlert: {
				action: this.actionAlert,
				email: this.emailAlert,
				gameId: this.gameId,
				price: this.priceAlert,
			},
		}
	},

	methods: {
		setupAlertPrice () {
			this.popupAlert = true
		},

		closeAlert () {
			this.popupAlert = false
			this.configAlert = Object.assign({})
		},

		async confirmSetupAlert () {
			
			try {

				const response = await cheapshark.editAlertDeal(this.configAlert.action, this.configAlert.email, this.configAlert.gameId, this.configAlert.price)

				if (response) {
					alert("Setup Successfully")
				}

			} catch (error) {
				alert(error)
			}
			
		},
	},
}
</script>

<style>

</style>