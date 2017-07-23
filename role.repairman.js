const actions = require('creeps.actions');

var roleRepairman ={
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.ennergy == 0){

            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {

            creep.memory.repairing = true;
        }


        if(creep.memory.repairing) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < (structure.hitsMax / 2)
            });
            if(closestDamagedStructure) {
                if(creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestDamagedStructure,
                                 {visualizePathstyle: {stroke: '#ffffff'}})};
            }
        }
        else{
            actions.searchingForSources(creep);
        }
    }
};


module.exports = roleRepairman;
