<template>
    <q-footer class="transparent" id="footer">
        <div class="row items-center justify-center">
            <div class="col-10 row items-center justify-center" id="foot-center">
                <div class="col row justify-end items-center" style="margin-right:40px">
                    <q-btn type="a" flat no-caps
                     v-for="link in left_outer_links" :key="link" 
                     :href="link.href" rel="noopener" target="_blank" text-color="primary" size="xs">{{link.name}}</q-btn>
                </div>
                <center><a class="col-auto" href="https://github.com/cv1002/cublog" rel="noopener" target="_blank">
                    <img class="logo" src="./github-black.svg" alt="github"/>
                </a></center>
                <div class="col row justify-start items-center" style="margin-left:40px">
                    <q-btn type="a" flat no-caps
                     v-for="link in right_outer_links" :key="link" 
                     :href="link.href" rel="noopener" target="_blank" text-color="primary" size="xs">{{link.name}}</q-btn>
                </div>
            </div>
        </div>
    </q-footer>
</template>

<style scoped lang="scss">
    .logo{
        $width:30px;
        $height:30px;
        width:$width;
        height:$height;
        display:inline-block;
    }
    #foot-center{
        border:grey 1px;
        border-style: solid none none none;
        padding: 20px 0px 20px 0px;
    }
    #footer{
        color: black;
    }
</style>

<script>
    export default {
        name:"footer",
        data () {
            return {
                outer_links : [{name : "License", href : "https://github.com/cv1002/cublog/blob/main/LICENSE"},
                               {name : "About", href : "https://github.com/cv1002/cublog/blob/main/README.md"},
                               {name : "Help", href:""},
                               {name : "Contact us", href:""}]
            }
        },
        computed: {
            left_outer_links() {
                let outer_links = this.$data.outer_links
                return outer_links.slice(0, Math.ceil(outer_links.length/2))
            },
            right_outer_links() {
                let outer_links = this.$data.outer_links
                return outer_links.slice(Math.ceil(outer_links.length/2))
            }
        }
    }
</script>