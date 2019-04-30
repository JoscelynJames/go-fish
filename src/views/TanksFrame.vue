<template>
  <div class="row">
    <md-card
      md-with-hover
      v-for="tank in tanks"
      :key="tank.id">
      <md-ripple>
        <md-card-header>
          <div class="md-title md-display-1">{{ tank.name }}</div>

          <div class="md-subhead">
            <span>
              Created {{ tank.startDate.month }} {{ tank.startDate.year }}
            </span>
            <md-icon
              v-if="tank.maintenanceRequired"
              class="tank">
              warning
            </md-icon>
          </div>

          <aside>
            <span class="md-caption"><b>{{tank.gallons}}</b> gals</span>
            <span class="md-caption"><b>{{tank.fish}}</b> fish</span>
            <span class="md-caption" v-if="tank.hasLivePlants">Live Plants</span>
            <span class="md-caption" v-if="tank.freshWater">Fresh Water</span>
            <span class="md-caption" v-if="tank.saltWater">Salt Water</span>
          </aside>
        </md-card-header>

        <md-card-media>
          <img :src="tank.image" alt="People">
        </md-card-media>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { MdCard, MdIcon, MdRipple } from 'vue-material/dist/components';

Vue.use(MdCard);
Vue.use(MdIcon);
Vue.use(MdRipple);

export default Vue.component('tank-frame', {
  renderer: () => {},
  components: {},
  data: () => ({
    tanks: [
      {
        id: 1,
        name: 'Betta Tank',
        gallons: 10,
        fish: 6,
        hasLivePlants: true,
        freshWater: true,
        saltWater: false,
        startDate: {
          month: 'January',
          year: 2019,
        },
        maintenanceRequired: true,
        image: 'https://buddygenius.com/wp-content/uploads/2018/05/Best-Betta-Fish-Tanks.png',
      },
      {
        id: 2,
        name: 'Corral Tank',
        gallons: 20,
        fish: 0,
        hasLivePlants: true,
        freshWater: false,
        saltWater: true,
        startDate: {
          month: 'March',
          year: 2016,
        },
        maintenanceRequired: false,
        image: 'https://aquariumadviser.com/wp-content/uploads/2016/07/Led-lights-for-reef-tank-300x240.jpg',
      },
    ],
  }),
});
</script>

<style scoped lang='scss'>
  .md-card {
    width: 400px;
    height: 300px;
    margin: 8px;
    display: inline-block;
    vertical-align: top;

    .md-title, .md-subhead {
      text-align: left;
    }

    aside {
      width: 30%;
      position: absolute;
      top: 8px;
      right: 0px;
      text-align: right;
      display: flex;
      flex-direction: column;
      margin-right: 8px;
    }

    .md-icon {
      width: 20px;
      min-width: 15px;
      height: 20px;
      margin-bottom: 4px;
      font-size: 18px !important;
      color: #FFD747;
    }
  }
</style>
