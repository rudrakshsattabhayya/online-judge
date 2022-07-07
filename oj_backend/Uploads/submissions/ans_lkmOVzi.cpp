#include<bits/stdc++.h>
#define ll long long
using namespace std;

vector<int> fun(vector<int> &temp){
   vector<int> row=temp,ans;
   sort(row.begin(),row.end());

   for(int i=0;i<row.size();i++){
      if(row[i]!=temp[i]) ans.push_back(i);
   }

   return ans;
}

int main(){
   ios_base::sync_with_stdio(0);
   cin.tie(0);
   cout.tie(0);
   int t;
   cin>>t; 
   while(t--){
      int n,m,r1=0,r2=0;
      bool correct=true,ifst=false;
      cin>>n>>m;
      vector<vector<int>> v(n,vector<int>(m,0));
      vector<int> temp;
      for(int i=0;i<n;i++){
         for(int j=0;j<m;j++){
            cin>>v[i][j];
         }
      }

      for(int i=0;i<n;i++){
         for(int j=1;j<m;j++){
            if(v[i][j]<v[i][j-1]){
                ifst=true;
               temp=v[i];
               temp=fun(temp);
               if(temp.size()!=2) correct=false;
               break;
            }
         }
         if(!correct) break;
      }

      if(correct&&ifst){
         r1=temp[0]; r2=temp[1];
         for(int i=0;i<n;i++){
            swap(v[i][r1],v[i][r2]);
            for(int j=1;j<m;j++){
               if(v[i][j]<v[i][j-1]){
                  correct=false;
                  break;
               }
            }
            if(!correct) break;
         }
      }

      if(correct) cout<<r1+1<<" "<<r2+1<<endl;
      else cout<<-1<<endl;
   }
}