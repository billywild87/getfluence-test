// eslint-disable-next-line import/no-anonymous-default-export
export const route = {

auth:{
    private:false,
    path:'/auth/*',
    extendsRoutes:{
    signin:{
        private:false,
        path:'/auth/signin'
    },
    signup:{
        private:false,
        path:'/auth/signup'
        },
    }
},
    home:{
        private:true,
        path:'/'
    },
    notfound:{
        private:true,
        path:'/404'
    },
    profil:{
        private:true,
        path:'/'
    },
}