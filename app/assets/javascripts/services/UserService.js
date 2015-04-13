'use strict';

iuvare.factory('UserService', [function(){

    function User(){

        var _id = undefined;
        var _firstName = undefined;
        var _lastName = undefined;
        var _email = undefined;
        var _xangoId = undefined;
        var _xangoRank = undefined;
        var _iuvareId = undefined;
        var _sponsorXangoId = undefined;
        var _sponsorIuvareId = undefined;
        var _placementXangoId = undefined;
        var _placementIuvareId = undefined;
        var _active = false;
        var _downlinePosition = undefined;
        var _paymentExpiration = undefined;
        var _picture = undefined;
        var _uplineId = undefined;

        this.createUser = function (id, firstName, lastName, email, xangoId, xangoRank, iuvareId, sponsorXangoId, sponsorIuvareId, placementeXangoId, placementeIuvareId, active, downlinePosition, paymentExpiration, picture, uplineId) {
            this.setId(id);
            this.setFirstName(firstName);
            this.setLastName(lastName);
            this.setEmail(email);
            this.setXangoId(xangoId);
            this.setXangoRank(xangoRank);
            this.setIuvareId(iuvareId);
            this.setSponsorXangoId(sponsorXangoId);
            this.setSponsorIuvareId(sponsorIuvareId);
            this.setPlacementIuvareId(placementeIuvareId)
            this.setPlacementIuvareId(placementeXangoId);
            this.setActive(active);
            this.setDownlinePosition(downlinePosition);
            this.setPaymentExpiration(paymentExpiration);
            this.setPicture(picture);
            this.setUplineId(uplineId);
        };

        this.getId = function(){
            return _id;
        };

        this.setId = function(id){
            _id = id;
        };

        this.getFirstName = function(){
            return _firstName;
        };

        this.setFirstName = function(firstName){
            _firstName = firstName;
        };

        this.getLastName = function(){
            return _lastName;
        };

        this.setLastName = function(lastName){
            _lastName = lastName;
        };

        this.getEmail = function(){
            return _email;
        };

        this.setEmail = function(email){
            _email = email;
        };

        this.getXangoId = function(){
            return _xangoId;
        };

        this.setXangoId = function(xangoId){
            _xangoId = xangoId;
        };

        this.getXangoRank = function(){
            return _xangoRank;
        };

        this.setXangoRank = function(xangoRank){
            _xangoRank = xangoRank;
        };

        this.getIuvareId = function(){
            return _iuvareId;
        };

        this.setIuvareId = function(iuvareId){
            _iuvareId = iuvareId;
        };

        this.getSponsorXangoId = function(){
            return _sponsorXangoId;
        };

        this.setSponsorXangoId = function(sponsorXangoId){
            _sponsorXangoId = sponsorXangoId;
        };

        this.getSponsorIuvareId = function(){
            return _sponsorIuvareId;
        };

        this.setSponsorIuvareId = function(sponsorIuvareId){
            _sponsorIuvareId = sponsorIuvareId;
        };

        this.getPlacementXangoId = function(){
            return _placementXangoId;
        };

        this.setPlacementXangoId = function(placementXangoId){
            _placementXangoId = placementXangoId;
        };

        this.getPlacementIuvareId = function(){
            return _placementIuvareId;
        };

        this.setPlacementIuvareId = function(placementIuvareId){
            _placementIuvareId = placementIuvareId;
        };

        this.getActive = function(){
            return _active;
        };

        this.setActive = function(active){
            _active = active;
        };

        this.getDownlinePosition = function(){
            return _downlinePosition;
        };

        this.setDownlinePosition = function(downlinePosition){
            _downlinePosition = downlinePosition;
        };

        this.getPaymentExpiration = function(){
            return _paymentExpiration;
        };

        this.setPaymentExpiration = function(paymentExpiration){
            _paymentExpiration = paymentExpiration;
        };

        this.getPicture = function(){
            return _picture;
        };

        this.setPicture = function(picture){
            _picture = picture;
        };

        this.setUplineId = function(){
            return _uplineId;
        };

        this.getUplineId = function(uplineId){
            _uplineId = uplineId;
        };

    }


    var createUser = function (id, firstName, lastName, email, xangoId, xangoRank, iuvareId, sponsorXangoId, sponsorIuvareId, placementeXangoId, placementeIuvareId, active, downlinePosition, paymentExpiration, picture, uplineId) {

        // Se crea una nueva instancia de Usario
        var user = new User();

        //Se asignan variables a través de un método constructor
        user.createUser(id, firstName, lastName, email, xangoId, xangoRank, iuvareId, sponsorXangoId, sponsorIuvareId, placementeXangoId, placementeIuvareId, active, downlinePosition, paymentExpiration, picture, uplineId)

        return user;
    };

    return{
        createUser: createUser
    }


}]);