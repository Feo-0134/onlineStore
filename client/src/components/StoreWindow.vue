<template>
  <v-container>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in itemList"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">INIT & MORE</div>
                    <v-list-item-title class="headline mb-1">{{n.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{n.detail}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                ><v-img v-bind:src=n.imgSrc></v-img>
                </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn text>¥ {{n.price}}</v-btn>
                <v-btn @click="payment(n.name);" text>Purchase</v-btn>
                </v-card-actions>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
<v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
        class = "float-right"
          color="red lighten-2"
          dark
          style=" postion: fixed, bottom:10px, right:10px"
          v-on="on"
        >
          Pay
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Item List
        </v-card-title>

        <v-card-text>
          {{content}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
  </v-container>
</template>

<script>
var store = require('store')
export default {
  name: 'StoreWindow',

  data: () => ({
    itemList:[
        {
            name: 'markCup',
            price: 15,
            detail: 'best cup forever',
            imgSrc: 'https://tshop.r10s.jp/cliffedge/cabinet/sup10/18021909_1.jpg'
        },
        {
            name: 'bag',
            price: 25,
            detail: 'best bag forever',
            imgSrc: 'https://wbcdn.worldsbest.com/uploads/45/29972/1504023671.jpg'
        },
        {
            name: 'badge',
            price: 10,
            detail: 'best badge forever',
            imgSrc: 'https://img0.etsystatic.com/211/0/15254996/il_fullxfull.1286564300_eik6.jpg'
        },
    ],
    content: '',
    dialog: false,
  }),
  methods: {
      payment(name) {
        store.set('item',{
            item: name
        })
        this.content = store.get('user')
        this.content.item = store.get('item')
      }
  },
};
</script>
