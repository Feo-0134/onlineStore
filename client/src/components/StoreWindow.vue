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
                <v-btn text>Purchase</v-btn>
                </v-card-actions>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>

  </v-container>
</template>

<script>
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
    ]
  }),
};
</script>
