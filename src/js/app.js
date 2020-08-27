const alarmColor = function (profile) {
  const { health } = profile;
  if (health < 100 && health > 30) {
    console.log('wounded');
    return 'wounded';
  } if (health <= 30) {
    console.log('critical');
    return 'critical';
  }
  console.log('healthy');
  return 'healthy';
};

export default alarmColor;

alarmColor({ name: 'Маг', health: 90 });
