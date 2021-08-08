import Home from '../components/Home.vue';
import About from '../components/About.vue';
import BasedOnThePurposeLoans from '../components/bank/loansBasedOnThePurpose/BasedOnThePurposeLoans.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import HomeLoans from '../components/bank/loansBasedOnThePurpose/HomeLoans';
import EducationLoans from '../components/bank/loansBasedOnThePurpose/EducationLoans';
import PersonalLoans from '../components/bank/loansBasedOnThePurpose/PersonalLoans';
import VehicleLoans from '../components/bank/loansBasedOnThePurpose/VehicleLoans';
import BasedOnThePledgedAssetsLoans from '../components/bank/loansBasedOnThePledgedAssets/LoansBasedOnThePledgedAssets';
import LoansBasedOnTheSecurityProvider from '../components/bank/loansBasedOnTheSecurityProvider/LoansBasedOnTheSecurityProvider';
import GoldLoans from '../components/bank/loansBasedOnThePledgedAssets/GoldLoans';
import LoansAgainstAssets from '../components/bank/loansBasedOnThePledgedAssets/LoansAgainstTheAssets';
import SecuredLoans from '../components/bank/loansBasedOnTheSecurityProvider/SecuredLoans';
import UnsecuredLoans from '../components/bank/loansBasedOnTheSecurityProvider/UnsecuredLoans';
import Loans from '../components/bank/Loans';



const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/loans/loansBasedOnPledgedAssets', component: BasedOnThePledgedAssetsLoans},
  {path: '/loans/securityProvidedLoans', component: LoansBasedOnTheSecurityProvider},
  {path: '/loans/loansBasedOnPurpose', component: BasedOnThePurposeLoans},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/loans/homeLoans', component: HomeLoans},
  {path: '/loans/educationLoans', component: EducationLoans},
  {path: '/loans/personalLoans', component: PersonalLoans},
  {path: '/loans/vehicleLoans', component: VehicleLoans},
  {path: '/loans/goldLoans', component: GoldLoans},
  {path: '/loans/loansAgainstAssets', component: LoansAgainstAssets},
  {path: '/loans/securedLoans', component: SecuredLoans,  meta: {requiresAuth: true}},
  {path: '/loans/unsecuredLoans', component: UnsecuredLoans},
  {path: '/loans', component: Loans, meta: {requiresAuth: true}}


];

export default routes;
